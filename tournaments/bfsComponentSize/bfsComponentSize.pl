#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub bfsComponentSize {
    my ($matrix) = @_;

    my $n = @$matrix;
    my @visited = (0)x$n;
    my @store = (1);
    my $result = 0;

    while (@store) {
        my $item = shift(@store);
        $visited[$item] = 1;
        ++$result;
        for (my $i = 0; $n > $i; ++$i) {
            if (@{@$matrix[$item]}[$i] && !$visited[$i]) {
                $visited[$i] = 1;
                push(@store, $i);
            }
        }
    }

    return $result;
}
