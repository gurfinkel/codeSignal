#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub graphEdges {
    my ($matrix) = @_;

    my $result = 0;

    for (my $i = 0; @$matrix > $i; ++$i) {
        for (my $j = 0; $i > $j; ++$j) {
            $result += @$matrix[$i] -> [$j];
        }
    }

    return $result;
}
