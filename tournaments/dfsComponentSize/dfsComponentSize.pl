#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub dfsComponentSize {
    my ($matrix, $vertex) = @_;
    my $result = 1;
    my @queue = ($vertex);
    my %visited;

    $visited{$vertex} = 1;

    while(@queue) {
        my $n = shift(@queue);
        for (my $i = 0; @{@$matrix[$n]} > $i; ++$i) {
            if (@{@$matrix[$n]}[$i] & !$visited{$i}){
                ++$result;
                push(@queue, $i);
                $visited{$i} = 1;
            }
        }
    }

    return $result;
}
