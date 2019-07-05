#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub matrixTrace {
    my ($matrix) = @_;

    my $result = 0;

    for (my $i = 0; @$matrix > $i; ++$i) {
        $result += @$matrix[$i] -> [$i];
    }

    return $result;
}
