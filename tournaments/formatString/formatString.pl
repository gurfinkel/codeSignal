#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub formatString {
    my ($input) = @_;

    return join(' ', grep(!/''/, split(' ', $input)));
}
